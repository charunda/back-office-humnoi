import React from "react";
import { Sidenav, Nav } from "rsuite";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";


function SideNavbar() {
  const panelStyles = {
    padding: "15px 20px",
    color: "#aaa",
  };

  const headerStyles = {
    padding: 20,
    fontSize: 16,
    background: "#5151F9",
    color: " #fff",
  };
  const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div>home!</div>,
      main: () => <h2>Home</h2>
    },
    {
      path: "/bubblegum",
      sidebar: () => <div>bubblegum!</div>,
      main: () => <h2>Bubblegum</h2>
    },
    {
      path: "/shoelaces",
      sidebar: () => <div>shoelaces!</div>,
      main: () => <h2>Shoelaces</h2>
    }
  ]
  return (
    <div className="show-fake-browser sidebar-page">
    <Container>
      <Sidebar
        style={{ display: 'flex', flexDirection: 'column' }}
        width={expand ? 260 : 56}
        collapsible
      >
        <Sidenav.Header>
          <div style={headerStyles}>
            <LogoAnalytics style={{ fontSize: 20 }} />
            <span style={{ marginLeft: 12 }}> BRAND</span>
          </div>
        </Sidenav.Header>
        <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
          <Sidenav.Body>
            <Nav>
              <Nav.Item eventKey="1" active icon={<Dashboard />}>
                Dashboard
              </Nav.Item>
              <Nav.Item eventKey="2" icon={<Group />}>
                User Group
              </Nav.Item>
              <Nav.Menu
                eventKey="3"
                trigger="hover"
                title="Advanced"
                icon={<Magic />}
                placement="rightStart"
              >
                <Nav.Item eventKey="3-1">Geo</Nav.Item>
                <Nav.Item eventKey="3-2">Devices</Nav.Item>
                <Nav.Item eventKey="3-3">Brand</Nav.Item>
                <Nav.Item eventKey="3-4">Loyalty</Nav.Item>
                <Nav.Item eventKey="3-5">Visit Depth</Nav.Item>
              </Nav.Menu>
              <Nav.Menu
                eventKey="4"
                trigger="hover"
                title="Settings"
                icon={<GearCircle />}
                placement="rightStart"
              >
                <Nav.Item eventKey="4-1">Applications</Nav.Item>
                <Nav.Item eventKey="4-2">Websites</Nav.Item>
                <Nav.Item eventKey="4-3">Channels</Nav.Item>
                <Nav.Item eventKey="4-4">Tags</Nav.Item>
                <Nav.Item eventKey="4-5">Versions</Nav.Item>
              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
        <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
      </Sidebar>

      <Container>
        <Header>
          <h2>Page Title</h2>
        </Header>
        <Content>Content</Content>
      </Container>
    </Container>
  </div>
  );
}

export default SideNavbar;
