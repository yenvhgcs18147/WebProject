import React, {useState} from 'react'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Header = () => {
    
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);

    return (
        <div className="main-header">
            <div className="hd-wrapper">
                
                <img className="icon logo" src="../image/logo.png" alt="" />
                <div class="search">
                    <input type="text" name="" id="" placeholder="Write something" class="search__input" />
                    <button type="submit" class="search__button" tabIndex="-1">Search</button>
                </div>
                <div>
                    <div className="hd-rightum">
                        <div className="hover-drop-down menu-item">
                            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle caret size="sm" outline color="none" className="hd-btn">
                                    <i class="fas fa-user"> ME</i>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>Header</DropdownItem>
                                    <DropdownItem disabled>Action</DropdownItem>
                                    <DropdownItem>Another Action</DropdownItem>
                                    <DropdownItem divider />
                                </DropdownMenu>
                            </ButtonDropdown>
                            <Button outline color="none" className="hd-btn">
                                <i class="fas fa-shopping-bag"> MY BAG</i>
                            </Button>
                        </div>
                    </div>
                    <Navbar/>
                </div>
            </div>
        </div>
    )
}

export default Header
