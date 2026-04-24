import express from "express";
import { Locations, sequelize, Risks } from "./tables/index.js";
import { POSSIBLE_RISKS } from "./vld/risk-validation.js";
import { JUDETE } from "./vld/judet-validation.js";

