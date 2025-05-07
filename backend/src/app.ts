import settings from "@/helpers/settings-server.ts";
import express from "express";

var App = settings(express());

export { App };
