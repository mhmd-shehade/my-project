import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
export default function SideBar() {
  const count = useSelector((state) => state.cart.value).length;
  return (
    <Card className="w-full max-w-[17rem] p-4 shadow-xl shadow-blue-gray-900/5 h-screen">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          HELLO
        </Typography>
      </div>
      <List>
        <Link to="/">
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Home
          </ListItem>
        </Link>
        <Link to={"/cart"}>
            <ListItem>
            <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Cart
            <ListItemSuffix>
                <Chip
                value={count}
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
                />
            </ListItemSuffix>
            </ListItem>
        </Link>
        <Link to={"/shop"}>
            <ListItem>
            <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Shop
            </ListItem>
        </Link>
      </List>
    </Card>
  );
}
