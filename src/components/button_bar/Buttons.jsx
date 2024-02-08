import React, { useEffect } from 'react'
import Button from './Button';

export default function Buttons() {
    const [buttons, setButtons] = useState([]);
    useEffect(() => {

    }, [])
    return (
        <div>
            {buttons.map((button => {
                <Button img={''} href={button.href} />
            }))}
        </div>
    )
}
