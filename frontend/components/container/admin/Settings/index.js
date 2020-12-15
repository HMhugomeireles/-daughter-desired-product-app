import { useState } from "react";
import SettingsUI from "../../../ui/admin/Settings";

export default function Settings(props) {
    const [valueEarn, setValueEarn] = useState(0);
    const [email, setEmail] = useState("");
    const [allowPercentageBuy, setAllowPercentageBuy] = useState(0)
    const [sendInvite, setSendInvite] = useState(0)

    const [showValueEarn, setShowValueEarn] = useState(false)
    const [showTypeEarning, setShowTypeEarning] = useState(false)
    const [showNotificationEmail, setShowNotificationEmail] = useState(false)
    const [showPercentageToBuy, setShowPercentageToBuy] = useState(false)
    const [showSendInvite, setShowSendInvite] = useState(false)

    const [isValueEarnReadOnly, setValueEarnReadOnly] = useState(true)
    const [isTypeEarningReadOnly, setTypeEarningReadOnly] = useState("disabled")
    const [isNotificationEmailReadOnly, setNotificationEmailReadOnly] = useState(true)
    const [isPercentageToBuyReadOnly, setPercentageToBuyReadOnly] = useState(true)
    const [isSendInviteReadOnly, setSendInviteReadOnly] = useState(true)

    function onHandlerToggleEdit(sectionEdit) {
        switch (sectionEdit) {
            case "valueEarn":
                setShowValueEarn(!showValueEarn)
                setValueEarnReadOnly(!isValueEarnReadOnly)
                break;
            case "typeEarning":
                setShowTypeEarning(!showTypeEarning)
                setTypeEarningReadOnly(undefined)
                break;
            case "notificationEmail":
                setShowNotificationEmail(!showNotificationEmail)
                setNotificationEmailReadOnly(!isNotificationEmailReadOnly)
                break;
            case "percentageToBuy":
                setShowPercentageToBuy(!showPercentageToBuy)
                setPercentageToBuyReadOnly(!isPercentageToBuyReadOnly)
                break;
            case "sendInvite":  
                setShowSendInvite(!showSendInvite)
                setSendInviteReadOnly(!isSendInviteReadOnly)
                break;
            default:
                break;
        }
    }

    function onCancel() {
        setValueEarnReadOnly(true)
        setTypeEarningReadOnly("disabled")
        setNotificationEmailReadOnly(true)
        setPercentageToBuyReadOnly(true)
        setSendInviteReadOnly(true)
        setShowValueEarn(false)
        setShowTypeEarning(false)
        setShowNotificationEmail(false)
        setShowPercentageToBuy(false)
        setShowSendInvite(false)
    }


    function onSave() {
        onCancel()
        // TODO send update to update values
    }

    return  <SettingsUI 
                controllers={{
                    showValueEarn,
                    showTypeEarning,
                    showNotificationEmail,
                    showPercentageToBuy,
                    showSendInvite,
                    isValueEarnReadOnly,
                    isTypeEarningReadOnly,
                    isNotificationEmailReadOnly,
                    isPercentageToBuyReadOnly,
                    isSendInviteReadOnly                    
                }}
                data={{
                    valueEarn,
                    email,
                    allowPercentageBuy,
                    sendInvite
                }}
                actions={{
                    onSetValueEarn: (e) => setValueEarn(e.target.value),
                    onSetEmail: (e) => setEmail(e.target.value),
                    onSetAllowPercentageBuy: (e) => setAllowPercentageBuy(e.target.value),
                    onSetSendInvite: (e) => setSendInvite(e.target.value),
                    onHandlerToggleEdit,
                    onCancel,
                    onSave
                }}
            /> 
}