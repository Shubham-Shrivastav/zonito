import { Link } from "react-router-dom";
import { styled } from '@mui/system';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

const StyledAppBar = styled(AppBar)({
    backdropFilter: 'blur(5px)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 999,
    borderBottomLeftRadius: '18px',
    borderBottomRightRadius: '18px',
    boxShadow: '0px 4px 6px rgba(255, 255, 255, 0.4)'});

const NavList = styled('ul')({
    display: 'flex',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
});

const NavItem = styled('li')({
    marginLeft: '20px',
});

const Header = () => {
    return (
        <StyledAppBar>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{
                    flexGrow: 1, color: 'aliceblue'
                }}>
                    Zonito.in
                </Typography>
                <nav>
                    <NavList>
                        <NavItem>
                            <Link to="/" style={{ color: 'aliceblue', textDecoration: 'none' }}>Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about" style={{ color: 'aliceblue', textDecoration: 'none' }}>About</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/cart" style={{ color: 'aliceblue', textDecoration: 'none' }}>Cart</Link>
                        </NavItem>
                    </NavList>
                </nav>
            </Toolbar>
        </StyledAppBar>
    );
}

export default Header;
