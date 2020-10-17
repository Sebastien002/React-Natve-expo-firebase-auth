'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _index2 = require('./style/index.native');

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
}

var CarouselStyles = _reactNative.StyleSheet.create(_index3['default']);
var defaultPagination = function defaultPagination(props) {
    var styles = props.styles,
        current = props.current,
        vertical = props.vertical,
        count = props.count,
        dotStyle = props.dotStyle,
        dotActiveStyle = props.dotActiveStyle;

    var positionStyle = vertical ? 'paginationY' : 'paginationX';
    var flexDirection = vertical ? 'column' : 'row';
    var arr = [];
    for (var i = 0; i < count; i++) {
        arr.push(_react2['default'].createElement(_reactNative.View, {
            key: 'dot-' + i
            // tslint:disable-next-line:jsx-no-multiline-js
            ,
            style: [styles.pointStyle, styles.spaceStyle, dotStyle, i === current && styles.pointActiveStyle, i === current && dotActiveStyle]
        }));
    }
    return _react2['default'].createElement(
        _reactNative.View,
        {style: [styles.pagination, styles[positionStyle]]},
        _react2['default'].createElement(
            _reactNative.View,
            {style: {flexDirection: flexDirection}},
            arr
        )
    );
};

var Carousel = function (_React$Component) {
    (0, _inherits3['default'])(Carousel, _React$Component);

    function Carousel(props) {
        (0, _classCallCheck3['default'])(this, Carousel);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        _this.getChildrenCount = function (children) {
            var count = children ? _react2['default'].Children.count(children) || 1 : 0;
            return count;
        };
        _this.loopJump = function () {
            // iOS 通过 contentOffet 可以平滑过度，不需要做处理
            if (_this.state.loopJump && _reactNative.Platform.OS === 'android') {
                var _index = _this.state.selectedIndex + (_this.props.infinite ? 1 : 0);
                setTimeout(function () {
                    var x = _this.state.width * _index;
                    _this.scrollviewRef.scrollTo({x: x, y: 0}, false);
                }, 10);
            }
        };
        _this.autoplay = function () {
            var _this$props = _this.props,
                children = _this$props.children,
                autoplay = _this$props.autoplay,
                infinite = _this$props.infinite,
                autoplayInterval = _this$props.autoplayInterval;
            var _this$state = _this.state,
                isScrolling = _this$state.isScrolling,
                autoplayEnd = _this$state.autoplayEnd,
                selectedIndex = _this$state.selectedIndex;

            var count = _this.getChildrenCount(children);
            if (!Array.isArray(children) || !autoplay || isScrolling || autoplayEnd) {
                return;
            }
            clearTimeout(_this.autoplayTimer);
            _this.autoplayTimer = setTimeout(function () {
                if (!infinite && selectedIndex === count - 1) {
                    // !infinite && last one, autoplay end
                    return _this.setState({autoplayEnd: true});
                }
                _this.scrollNextPage();
            }, autoplayInterval);
        };
        _this.onScrollBegin = function (e) {
            _this.setState({
                isScrolling: true
            }, function () {
                if (_this.props.onScrollBeginDrag) {
                    _this.props.onScrollBeginDrag(e, _this.state, _this);
                }
            });
        };
        _this.onScrollEnd = function (e) {
            _this.setState({isScrolling: false});
            // android incompatible
            if (!e.nativeEvent.contentOffset) {
                // kind of hack ? see: line 282
                var position = e.nativeEvent.position;
                e.nativeEvent.contentOffset = {
                    x: position * _this.state.width
                };
            }
            _this.updateIndex(e.nativeEvent.contentOffset);
            _this.scrollEndTimter = setTimeout(function () {
                _this.autoplay();
                _this.loopJump();
                if (_this.props.onMomentumScrollEnd) {
                    _this.props.onMomentumScrollEnd(e, _this.state, _this);
                }
            });
        };
        _this.onScrollEndDrag = function (e) {
            var _this$state2 = _this.state,
                offset = _this$state2.offset,
                selectedIndex = _this$state2.selectedIndex;
            var children = _this.props.children;

            var previousOffset = offset.x;
            var newOffset = e.nativeEvent.contentOffset.x;
            var count = _this.getChildrenCount(children);
            if (previousOffset === newOffset && (selectedIndex === 0 || selectedIndex === count - 1)) {
                _this.setState({
                    isScrolling: false
                });
            }
        };
        _this.updateIndex = function (offset) {
            var state = _this.state;
            var selectedIndex = state.selectedIndex;
            var diff = offset.x - state.offset.x;
            var step = state.width;
            var loopJump = false;
            var children = _this.props.children;

            var count = _this.getChildrenCount(children);
            // Do nothing if offset no change.
            if (!diff) {
                return;
            }
            selectedIndex = selectedIndex + Math.round(diff / step);
            if (_this.props.infinite) {
                if (selectedIndex <= -1) {
                    selectedIndex = count - 1;
                    offset.x = step * count;
                    loopJump = true;
                } else if (selectedIndex >= count) {
                    selectedIndex = 0;
                    offset.x = step;
                    loopJump = true;
                }
            }
            _this.setState({
                selectedIndex: selectedIndex,
                offset: offset,
                loopJump: loopJump
            });
            var afterChange = _this.props.afterChange;

            if (afterChange) {
                afterChange(selectedIndex);
            }
        };
        _this.scrollNextPage = function () {
            var _this$props2 = _this.props,
                children = _this$props2.children,
                infinite = _this$props2.infinite;

            var count = _this.getChildrenCount(children);
            if (_this.state.isScrolling || count < 2) {
                return;
            }
            var state = _this.state;
            var diff = (infinite ? 1 : 0) + _this.state.selectedIndex + 1;
            var x = diff * state.width;
            var y = 0;
            _this.scrollviewRef.scrollTo({x: x, y: y});
            _this.setState({
                isScrolling: true,
                autoplayEnd: false
            });
            // trigger onScrollEnd manually in android
            if (_reactNative.Platform.OS === 'android') {
                _this.androidScrollEndTimer = setTimeout(function () {
                    _this.onScrollEnd({
                        nativeEvent: {
                            position: diff
                        }
                    });
                }, 0);
            }
        };
        _this.scrollPreviousPage = function () {
            var _this$props2 = _this.props,
                children = _this$props2.children,
                infinite = _this$props2.infinite;

            var count = _this.getChildrenCount(children);
            if (_this.state.isScrolling || count < 2) {
                return;
            }
            var state = _this.state;
            var diff = (infinite ? 1 : 0) + _this.state.selectedIndex - 1;
            var x = diff * state.width;
            var y = 0;
            _this.scrollviewRef.scrollTo({x: x, y: y});
            _this.setState({
                isScrolling: true,
                autoplayEnd: false
            });
            // trigger onScrollEnd manually in android
            if (_reactNative.Platform.OS === 'android') {
                _this.androidScrollEndTimer = setTimeout(function () {
                    _this.onScrollEnd({
                        nativeEvent: {
                            position: diff
                        }
                    });
                }, 0);
            }
        };
        _this.renderContent = function (pages) {
            var others = {
                onScrollBeginDrag: _this.onScrollBegin,
                onMomentumScrollEnd: _this.onScrollEnd,
                onScrollEndDrag: _this.onScrollEndDrag
            };
            return _react2['default'].createElement(
                _reactNative.ScrollView,
                (0, _extends3['default'])({
                    ref: function ref(el) {
                        return _this.scrollviewRef = el;
                    }
                }, _this.props, {
                    horizontal: true,
                    pagingEnabled: true,
                    bounces: !!_this.props.bounces,
                    scrollEventThrottle: 100,
                    removeClippedSubviews: false,
                    automaticallyAdjustContentInsets: false,
                    directionalLockEnabled: true,
                    showsHorizontalScrollIndicator: false,
                    showsVerticalScrollIndicator: false,
                    contentContainerStyle: _this.props.style,
                    contentOffset: _this.state.offset
                }, others),
                pages
            );
        };
        _this.renderDots = function (index) {
            var _this$props3 = _this.props,
                children = _this$props3.children,
                vertical = _this$props3.vertical,
                styles = _this$props3.styles,
                pagination = _this$props3.pagination,
                dotStyle = _this$props3.dotStyle,
                dotActiveStyle = _this$props3.dotActiveStyle;

            var count = _this.getChildrenCount(children);
            return pagination ? pagination({
                styles: styles,
                vertical: vertical,
                current: index,
                count: count,
                dotStyle: dotStyle,
                dotActiveStyle: dotActiveStyle
            }) : null;
        };
        _this.onLayout = function (e) {
            // for horizontal, get width, scollTo
            var props = _this.props;
            var count = _this.getChildrenCount(props.children);
            var selectedIndex = count > 1 ? Math.min(props.selectedIndex, count - 1) : 0;
            var width = e.nativeEvent.layout.width;
            var offsetX = width * (selectedIndex + (props.infinite ? 1 : 0));
            _this.setState({
                width: width,
                layoutWidth: width,
                offset: {x: offsetX, y: 0}
            }, function () {
                if (_reactNative.Platform.OS === 'android') {
                    _this.scrollviewRef.scrollTo({y: 0, x: offsetX}, false);
                }
            });
        };
        var _this$props4 = _this.props,
            children = _this$props4.children,
            selectedIndex = _this$props4.selectedIndex;

        var count = _this.getChildrenCount(children);
        var index = count > 1 ? Math.min(selectedIndex, count - 1) : 0;
        _this.state = {
            width: 0,
            isScrolling: false,
            autoplayEnd: false,
            loopJump: false,
            selectedIndex: index,
            offset: {x: 0, y: 0}
        };
        return _this;
    }

    (0, _createClass3['default'])(Carousel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.autoplay();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this.autoplayTimer);
            clearTimeout(this.androidScrollEndTimer);
            clearTimeout(this.scrollEndTimter);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            let _this = this;
            if (newProps.selectedIndex != this.state.selectedIndex) {
                var props = newProps;
                var width = this.state.layoutWidth;
                var count = _this.getChildrenCount(props.children);
                var selectedIndex = count > 1 ? Math.min(props.selectedIndex, count - 1) : 0;
                var offsetX = width * (selectedIndex + (props.infinite ? 1 : 0));
                _this.setState({
                    offset: {x: offsetX, y: 0},
                    selectedIndex: props.selectedIndex
                }, function () {
                    if (_reactNative.Platform.OS === 'android') {
                        _this.scrollviewRef.scrollTo({y: 0, x: offsetX}, false);
                    }
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var state = this.state;
            var _props = this.props,
                dots = _props.dots,
                infinite = _props.infinite,
                children = _props.children;

            if (!children) {
                return _react2['default'].createElement(
                    _reactNative.Text,
                    {style: {backgroundColor: 'white'}},
                    'You are supposed to add children inside Carousel'
                );
            }
            var pageStyle = {width: state.width};
            var count = this.getChildrenCount(children);
            var pages = void 0;
            // For make infinite at least count > 1
            if (count > 1) {
                // TODO: infinite
                var childrenArray = _react2['default'].Children.toArray(children);
                if (infinite) {
                    childrenArray.unshift(childrenArray[count - 1]);
                    childrenArray.push(childrenArray[0]);
                }
                pages = childrenArray.map(function (page, i) {
                    return _react2['default'].createElement(
                        _reactNative.View,
                        {style: pageStyle, key: i},
                        page
                    );
                });
            } else {
                pages = _react2['default'].createElement(
                    _reactNative.View,
                    {style: pageStyle},
                    children
                );
            }
            return _react2['default'].createElement(
                _reactNative.View,
                {onLayout: this.onLayout},
                this.renderContent(pages),
                dots && this.renderDots(this.state.selectedIndex)
            );
        }
    }]);
    return Carousel;
}(_react2['default'].Component);

Carousel.defaultProps = {
    bounces: true,
    infinite: false,
    dots: true,
    autoplay: false,
    autoplayInterval: 3000,
    selectedIndex: 0,
    // vertical 目前只实现 pagination，内容 vertical 由于自动高度拿不到，暂时无法实现
    vertical: false,
    styles: CarouselStyles,
    pagination: defaultPagination,
    dotStyle: {},
    dotActiveStyle: {}
};
exports['default'] = Carousel;
module.exports = exports['default'];
