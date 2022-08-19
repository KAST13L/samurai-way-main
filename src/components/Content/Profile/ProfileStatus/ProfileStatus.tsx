import React, {ChangeEvent} from 'react';

type ProfileStatusType = {
    status: string
    updateStatusTC: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        value: this.props.status
    }

    onChangeRefInput = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: e.currentTarget.value
        })
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusTC(this.state.value)
    }

    render() {
        return (
            <span>
                {!this.state.editMode
                    ? <span onDoubleClick={this.activateEditMode}>{this.props.status || 'no status...'}</span>
                    : <input autoFocus onBlur={this.deactivateEditMode} onChange={this.onChangeRefInput} type="text" value={this.state.value}/> }
            </span>
        );
    }
}

