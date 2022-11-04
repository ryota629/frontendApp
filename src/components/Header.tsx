import { AppBar, Toolbar, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Buttons = styled(Button)`
  height: 30px;
  margin-right: 20px;
  color: black;
  background-color: white;
`;

function Header() {
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{flex: 1,paddingLeft: "60px"}}
          >
          </Typography>
          <Typography
            variant="h3"
            component="div"
            sx={{flex: 1,paddingLeft: "60px"}}
          >
            Movie App
          </Typography>
          <Buttons variant="contained" size="small" href="/watchedlist">
            観たリスト
          </Buttons>
          <Buttons variant="contained" size="small" href="/nextwatchedlist">
            次観たいリスト
          </Buttons>
          <Buttons variant="contained" size="small" href="/searchmovie">
            検索
          </Buttons>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
