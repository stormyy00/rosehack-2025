import { ReactQuery } from "@/utils/react-query";
import { getStats } from "./actions";
import Statistics from "./statistics";

const Index = () => {
  return (
    <ReactQuery query={getStats} queryKey={["/admin/statistics"]}>
      <Statistics />
    </ReactQuery>
  );
};

export default Index;
