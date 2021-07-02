import _ from "lodash";
import { useHash } from "react-use";

const MyRouter = ({ children }) => {
  const routes = _.keyBy(
    children.map((c) => c.props),
    "path"
  );

  const [hash] = useHash();
  const Page = routes[hash.replace("#", "")]?.component;

  return Page ? <Page /> : "Not found.";
};

const Route = () => null;
