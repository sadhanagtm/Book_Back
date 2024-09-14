import { getSecondHandler, postSecondHandler } from './../controller/second.controller';
import { Router } from "express";
const router=Router()


/**
 * @swagger
 * components:
 *   schemas:
 *     SecondDto:
 *         type: object 
 *         properties:
 *           Second:
 *             type: string
 *             description: this is for second which is string
 *           age:
 *             type: number
 *             description: this is for age which is number
 *           Contact:
 *             type: number
 *             description: this is for contact in number
 */

/**
 * @swagger
 * tags:
 *   name: secondapi
 *   description: this is for secondapi
 */

/**
 * @swagger
 * /second/:
 *  get:
 *     summary: this is the gate request for secondapi
 *     tags: [secondapi]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref:'#/components/schemas/SecondDto'
 *     responses:
 *        '200':
 *          description: a successful message
 */
  


router.route('/')
.get(getSecondHandler)
.post(postSecondHandler)


export default router