import "reflect-metadata";
import {userExpressServer} from 'routing-controllers'
import * as express = from `express`;
import {createConnection} from "typeorm";
import {SystemUser} from "./entity/SystemUser";






const app = userExpressServer


