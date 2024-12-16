import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import { Stack, styled } from "@mui/material";

const drawerWidth = "50px";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //   const [selectedUserId, setselectedUserId] = React.useState(null);
  //   const [selectedGroupId, setselectedGroupId] = React.useState(null);
  //   const [anchorEl, setAnchorEl] = React.useState(null);

  //   //const [selectedMember, setSelectedMember] = React.useState({});
  //   const [showChats, setShowChats] = React.useState(false);
  //   const [openCreateGroup, setOpenCreateGroup] = React.useState(false);
  //   const [selectedMembers, setSelectedMembers] = React.useState([]);
  //   const [showGroups, setShowGroups] = React.useState(false);
  //   const [userProfile, setUserProfile] = React.useState(null);
  //   const [groupProfile, setGroupProfile] = React.useState(null);
  //   const [showUserProfile, setShowUserProfile] = React.useState(false);
  //   const { groups } = useGetGroups(user?.unique_id);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //   const handleLogOut = async () => {
  //     try {
  //       await clearLocalStorage();
  //     } finally {
  //       navigate("/");
  //     }
  //   };

  //   const handleClick = (event) => {
  //     setAnchorEl(anchorEl ? null : event.currentTarget);
  //   };

  //   const open = Boolean(anchorEl);
  //   const id = open ? "simple-popper" : undefined;

  //   const handleUserClicked = (val) => {
  //     setselectedUserId(val?.unique_id);
  //     setMobileOpen(false);
  //     navigate(`/message/${val?.unique_id}?user=${val?.unique_id}`);
  //   };

  //   React.useEffect(() => {
  //     const queryParams = new URLSearchParams(location.search);
  //     const user = queryParams.get("user");
  //     const group = queryParams.get("group");
  //     if (group) {
  //       setselectedGroupId(group);
  //       return;
  //     }
  //     if (user) {
  //       setselectedUserId(user);
  //       return;
  //     }
  //   }, [location.search]);

  //   const selectedUser = users?.find((val, i) => val.unique_id == selectedUserId);
  //   const selectedGroup = groups?.find(
  //     (val, i) => val.groupid == selectedGroupId
  //   );

  // React.useEffect(() => {
  //   const queryParams = new URLSearchParams(location.search);
  // }, [location.search]);

  //   const handleGroupClicked = (val) => {
  //     setselectedGroupId(val.groupid);
  //     navigate(`/groupchat/${val.groupid}?group=${val?.groupid}`);
  //   };

  //   const handleProfile = () => {
  //     if (selectedUser || selectedGroup) {
  //       setUserProfile(selectedUser);
  //       setGroupProfile(selectedGroup);
  //       setShowUserProfile(true);
  //     }
  //   };

  //   const userProfileClicked = () => {
  //     setUserProfile(user);
  //     setShowUserProfile(true);
  //     setAnchorEl(null);
  //   };
  //   console.log(userProfile, "profile");
  const drawer = (
    <div>
      <DrawerHeader
        sx={{
          alignSelf: "center",
          height: "60px",
        }}
      >
        <img
          src="../menu1.svg"
          width={"40px"}
          height={"40px"}
          style={{ padding: "10px 0 0 5px" }}
          alt="menu1"
        />
      </DrawerHeader>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "32px",
            background:
              "linear-gradient(to right, #FFFFFF 0%, #999999 50%, #FFFFFF 100%)",

            marginLeft: "9px",
            boxShadow: "0px 1px 5px 0px rgba(255, 255, 255, 0.1)",
          }}
        >
          <img
            src="../add.svg"
            width={"18px"}
            height={"18px"}
            style={{ marginLeft: "7px", marginTop: "7px" }}
            alt="add"
          />
        </div>
        <img
          src="../home.svg"
          width={"32px"}
          height={"24px"}
          style={{ marginLeft: "7px" }}
          alt="home"
        />
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "5px",
            background:
              "linear-gradient(to right, #FFFFFF 0%, #999999 50%, #FFFFFF 100%)",

            marginLeft: "9px",
            boxShadow: "0px 1px 5px 0px rgba(255, 255, 255, 0.1)",
          }}
        >
          <img
            src="../add.svg"
            width={"18px"}
            height={"18px"}
            style={{ marginLeft: "7px", marginTop: "7px" }}
            alt="add"
          />
        </div>
        <img
          src="../edit.svg"
          width={"32px"}
          height={"24px"}
          style={{ marginLeft: "7px" }}
          alt="edit"
        />

        <img
          src="../Icons.svg"
          width={"32px"}
          height={"24px"}
          style={{ marginLeft: "7px" }}
          alt="icons"
        />

        <img
          src="../search.svg"
          width={"32px"}
          height={"24px"}
          style={{ marginLeft: "7px" }}
          alt="search"
        />

        <img
          src="../test.svg"
          width={"32px"}
          height={"24px"}
          style={{ marginLeft: "7px" }}
          alt="test"
        />
        <img
          src="../test1.svg"
          width={"32px"}
          height={"24px"}
          style={{ marginLeft: "7px" }}
          alt="test1"
        />
        <img
          src="../people.svg"
          width={"32px"}
          height={"24px"}
          style={{ marginLeft: "7px" }}
        />

        <img
          src="../Line.svg"
          width={"32px"}
          height={"1px"}
          style={{ marginLeft: "7px" }}
        />

        <img
          src="../test4.svg"
          width={"32px"}
          height={"24px"}
          style={{ marginLeft: "7px" }}
        />

        <img
          src="../test5.svg"
          width={"32px"}
          height={"24px"}
          style={{ marginLeft: "7px" }}
        />

        <img
          src="../test6.svg"
          width={"32px"}
          height={"24px"}
          style={{ marginLeft: "7px" }}
        />
      </List>
    </div>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#2d446e",
          overflow: "hidden",
          height: "60px",
        }}
        elevation={0}
      >
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton> */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack direction={"row"} gap={2} sx={{ cursor: "pointer" }}>
            {/* <img
              src={process.env.REACT_APP_DEFAULT_IMG}
              alt="peofile"
              width={30}
              height={30}
              style={{ alignSelf: "center" }}
            /> */}

            <span
              style={{
                marginLeft: "74px",
                fontWeight: "700",
                fontSize: "24.22px",
                lineHeight: "29.52px",
                fontFamily: "Montserrat",
                textTransform: "uppercase",
              }}
            >
              Techyon
            </span>
          </Stack>
          <Box flexGrow={1} />

          {/*selectedUser && (
            <IconButton onClick={() => navigate(`/audiocall/1s`)}>
              <CallIcon />
            </IconButton>
          )*/}

          {/* 
          <IconButton>
            <Badge
              badgeContent={messages?.length}
              color="primary"
              invisible={messages?.some(
                (el) => el.receiverId !== user?.unique_id
              )}
            >
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
          {/* <IconButton onClick={handleLogOut}>
            <LogoutIcon />
          </IconButton> */}
          <div
            style={{
              display: "flex",
              gap: "25px",
              maxHeight: "40px",
              alignItems: "center",
            }}
          >
            <img src="../search-normal.svg" width={"24px"} height={"24px"} />
            <img src="../test8.svg" width={"24px"} height={"24px"} />
            <img src="../volume-high.svg" width={"24px"} height={"24px"} />
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "5px",
                background:
                  "linear-gradient(to right, #FFFFFF 0%, #999999 50%, #FFFFFF 100%)",

                padding: "6px",
                boxShadow: "0px 1px 5px 0px rgba(255, 255, 255, 0.1)",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "16px",
                  position: "absolute",
                  left: "22px",
                  top: "-8px",
                  backgroundColor: "#FF3B30",
                  borderRadius: "16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "500",
                    fontSize: "12px",
                    lineHeight: "14.52px",
                  }}
                >
                  +99
                </span>
              </div>
              <img src="../notification.svg" width={"24px"} height={"24px"} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <img
                src="../user.svg"
                width={"40px"}
                height={"40px"}
                alt="user"
              />
              <img
                src="../drop.svg"
                width={"20px"}
                height={"20px"}
                alt="drop"
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          height: "auto",
          overflow: "hidden",
        }}
        aria-label="mailbox folders"
      >
        {/* Temporary Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#2d446e",
              overflow: "hidden",
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Permanent Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#2d446e",
              overflow: "hidden",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
