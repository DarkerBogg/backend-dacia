import { sequelize } from "../db-instance.js";
import { Locations } from "./locations.js";
import { Risks } from "./risks.js";



await sequelize.sync().catch(console.error);

export { sequelize, Locations, Risks };