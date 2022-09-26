import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatusTC: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [statusValue, setStatusValue] = useState<string>(props.status)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatusValue(e.currentTarget.value)
    }

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusTC(statusValue)
    }

    useEffect(()=>{
        setStatusValue(props.status)
    },[props.status])

    return (
        <span>
                {!editMode
                    ? <span onDoubleClick={activateEditMode}>{props.status || 'no status...'}</span>
                    : <input autoFocus onBlur={deactivateEditMode} onChange={onChange} type="text"
                             value={statusValue}/>}
            </span>
    );
}

