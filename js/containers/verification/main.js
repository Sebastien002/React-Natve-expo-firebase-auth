import React, {Component} from 'react';
import ComponentView from './view';
import {ActionNames, createAction} from 'app-redux/actions';
import preProcess from '../preprocess';
import Spinner from '../../components/spinner'

class Main extends Component {

    constructor(props) {
        super(props);
        this.setValidations();
    }

    /**
     * Set Validations
     */
    setValidations() {
        const {translate} = this.props;
        this.validations = {
            "number": {
                rules: [
                    {required: true, message: translate("common.verification.error.required")}
                ]
            }
        }
    }

    componentDidMount() {
    }

    /**
     * On Submit of form
     * @param errors
     * @param values
     */
    async onSubmit(values) {
        const {onVerify,translate} = this.props;
        this.toast.loading("loading");
        try{
            if(onVerify){
                await onVerify(values.otp);
            }
            this.toast.hide();
        } catch(e){
            this.toast.fail(translate("verification.fail"))
        }

    }

    render() {
        return (ComponentView.bind(this))();
    }
}

/**
 * Bind Redux Actions
 * @param dispatch
 * @returns {{Object}}
 */
const bindAction = (dispatch) => {
    return {

    }
};
/**
 * Bind State to props
 * @param dispatch
 * @returns {{Object}}
 */
const mapStateToProps = (state) => {

    return {

    };
};
Main.displayName = "Verification";
export default preProcess(Main, {
    connect: [null, null],
    localize: true
});
