import { Dialog, Backdrop, Box, Typography } from "@mui/material"
import { styled } from "@mui/system";

const Login = () => {
    return (
        <Dialog 
            open={ true }

            sx={{
                '& .MuiDialog-paper': {
                    boxShadow: 'none',
                    height: '100%',
                    width: '100%',
                }
            }}

            BackdropComponent={styled(Backdrop, { name: 'MuiModal', slot: 'Backdrop', overridesResolver: (props, styles) => { return styles.backdrop; }, })({ zIndex: -1, 
            backgroundColor: "unset" })}
            
        >
            Hello
        </Dialog>
    )
}

export default Login