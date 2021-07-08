import _ from "lodash";

const data = [
  {
    id: "1",
    name: "Kennedy",
    job: "Chief Mobility Orchestrator",
    city: "North Alec",
  },
  {
    id: "2",
    name: "Lucius",
    job: "Internal Research Manager",
    city: "Littleland",
  },
  {
    id: "3",
    name: "Carlos",
    job: "Lead Configuration Analyst",
    city: "South Lillian",
  },
];

export const byName = _.keyBy(data, "name");
