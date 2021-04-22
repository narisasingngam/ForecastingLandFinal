---
title: Forcasting Land Price Introduction
slug: /
---

## Background and Motivation

### Background

Nowadays, the government releases a new law to collect the land and building tax that will be effective on 1 January 2020 which the tax rate will be calculated by the type of utilization from 0.01% - 3% per year. In this case, the treasury department has to provide all land prices in Thailand to calculate the tax.

The treasury department is a department for appraisal of the land. Which is directly related to real estate traders. The department has the land appraisal price which is the median price set by the land experts as a standard as a guideline for land sales prices for both real estate buyers, sellers, banks use them to determine the credit limits

However, the treasury department knows only the land price that has been traded in the market. So in the case of land that has no appraisal value, the treasury department said that we can calculate the appraisal price by the nearby land with similar conditions, and the depth of the land plots is similar.

In addition, the treasury department needs to rate the standard price in a specific area to sell in the market using the land price that has been sold in the market within the duration of 4 years.

### Motivation

The reason that we created this project is the treasury department wants an accurate program for calculating the land price instead of assigning their employee to estimate by the environment such as location (distance from the city center, municipal area, distance from transport system, accessibility), site characteristics (plot size, plot shape, topographic features, etc.), infrastructure, public facilities, and services. This model will help them easier to execute the land price for treading in the market.

<!-- ## Propose and Objectives

### Propose

- Start Planning for the project.
- Collect and Review Information about the land price.
- Prepare the project area.
- Final Planning for the project.

### Objectives

![Reflot](/img/refPic.png)

- Create the principles to find the `reference land price` (red area data) which will help the treasury department to predict the land price rate based on the reference land in the future.
- Forecasting `the blank area` (every parcel) by reference land with the best model that has less than 20% error. -->

## Problem Statement

To know the land price, the treasury department will assign an expert to estimate the land price. And to do a market approach they need to explore the price from nearby plots that are sold in the market and change the price to more reasonable in the present. The next step is comparing between estimated price and reasonable market price with any method such as direct comparison, sale adjustment grid, weighted quality scores (WQS), and multiple regression. From all of these steps, we will know the real price of this plot.

However, this estimating method is inconsistent due to exploring nearby plots, sometimes the characteristics of nearby plots and selected plots are not the same so it is difficult to compare and find a reasonable price. Using people for estimation is less accurate because each expert will have a different standard for rating and they can cause a mistake because there are many lands for estimating. Moreover, giving experts to visit the real site wastes too much time and labor. All of these problems can be solved by using our model.

## Requirements

- #### Find land price model

  The first requirement of the treasury department, they want a land price model that should have an understandable principle of how the model works with an accuracy of more than 80 percent.

- #### Find reference land

  The second requirement of the treasury department, they want a reference land that was created from the Chatuchak parcel. We have to design the best principle for creating the reference land.

## Datasets

There are 3 dataset that the treasury department provide to us

- `Parcel dataset` contains information about land lot in Chatuchak district which have around 67333 rows.
- `Sale dataset` contains information about land lot with sale price in Chatuchak district which have around 4918 rows.
- `POI (Point of interest) dataset` contains information about the land that have an interesting point such as mall, hospital, sky train nearby which have around 6395 rows.
