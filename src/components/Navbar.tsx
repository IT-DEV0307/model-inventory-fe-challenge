import { Divider, Typography } from "@mui/joy";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 border-b border-zinc-200 flex gap-4">
      <Typography level="title-lg">FE Challenge</Typography>
      <Divider orientation="vertical" />
      <Link to="/">Home</Link>
      <Link to="/inventory">Inventory</Link>
    </nav>
  );
};

export default Navbar;
