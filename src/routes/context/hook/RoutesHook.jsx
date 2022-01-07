import { useRoutes } from "../provider/RoutesProvider";

const RoutesHook = ({ children: toChild }) => {
  const { routes } = useRoutes();

  return toChild({ routes });
};

export default RoutesHook;
