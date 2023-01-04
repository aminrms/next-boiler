import { ClickAwayListener } from '@mui/material';

export default function ClickAwayListenerContainer({ children, clickAwayProps }) {

    return (
        <ClickAwayListener
            {...clickAwayProps}
        >
            {children}
        </ClickAwayListener>
    );
}