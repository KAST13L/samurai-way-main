import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string
    callback: (status: string) => void
    isOwner: boolean
}

export const EditableSpanWithHooks = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [value, setValue] = useState<string>(props.status)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.callback(value)
    }

    useEffect(()=>{
        setValue(props.status)
    },[props.status])

    return (
        <span>
                {!editMode
                    ? <span onDoubleClick={activateEditMode}>{props.status || 'no status...'}</span>
                    : props.isOwner
                        ? <input autoFocus onBlur={deactivateEditMode} onChange={onChange} type="text"
                             value={value}/>
                        : <span onDoubleClick={activateEditMode}>{props.status || 'no status...'}</span>}
            </span>
    );
}

