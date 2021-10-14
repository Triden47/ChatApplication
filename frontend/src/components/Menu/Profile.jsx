import { useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DrawerContext } from "../../context/DrawerProvider";
import { AccountContext } from "../../context/AccountProvider";

const drawerWidth = 502;

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "start",
    padding: theme.spacing(6, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-begin",
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();

    const { drawer, setDrawer } = useContext(DrawerContext);

    const handleDrawerClose = () => {
        // setOpen(false);
        setDrawer(false);
    };

    const { account } = useContext(AccountContext)
    // console.log(account)

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
        
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="persistent"
                anchor="left"
                open={drawer}
            >
                <DrawerHeader>
                    <div style={{ position: "relative", top: "35px" }}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === "ltr" ? (
                                <ChevronLeftIcon />
                            ) : (
                                <ChevronRightIcon />
                            )}
                        </IconButton>
                        <h3 style={{ display: "inline", 
                            position: "relative",
                            top: "5px",
                            left: "20px" 
                        }}>Profile</h3>
                    </div>
                </DrawerHeader>
                <Divider />
                <div style={{ display: "flex", height: "40%" }}>
                    <img style={{ margin: "auto", width: "40%", borderRadius: "100%" }} src={account.imageUrl} alt="Profile Pic"/>
                </div>
                <Divider />
                    <div>
                        <label style={{ padding: "5% 5% 3% 5%" }}>Your Name</label>
                        <h3 style={{ margin: "0 5%", padding: "1%", boxShadow: "0 5px 5px" }}>{account.givenName}</h3>
                    </div>
            </Drawer>
        </Box>
    );
}
