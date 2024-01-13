import { Button, Container, Divider, Typography } from "@mui/joy";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <div className="flex flex-col gap-4 pt-4">
        <Typography level="h1">Introduction</Typography>

        <Divider />

        <Typography level="title-lg">
          Welcome to the Frontend Challenge!
        </Typography>

        <Typography level="body-md">
          This is a simple application that allows the user to view a "Models
          Inventory" with a list of all of their models, and view an Analysis
          data visualization of the models.
        </Typography>

        <Typography level="body-md">
          Refer to the README.md file for more information. Best of luck!
        </Typography>

        <div>
          <Button
            component={Link}
            to="/inventory"
            variant="solid"
            size="lg"
            sx={{ textDecoration: "underline" }}
          >
            Go to Inventory Page
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
