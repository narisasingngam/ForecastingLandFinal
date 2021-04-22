---
title: Machine learning model
---

We research a new solution for calculating land price by using a machine learning model instead of assigning a specialist. Machine learning combines computer science and statistical analysis to enhance the prediction. High-value predictions can be obtained within human-computer interaction. It helps to predict uncertain situations with the data.

In our project, we place importance on comparing the performance of four machine learning models to find the best accurate model for forecasting the land price.

The four models contains:

## Linear regression

Linear Regression is the most common predictive model to identify the relationship among the variables. Apart from univariate or multivariate data types, the concept is linear. Multiple or multivariable linear regression is the process of prediction with more than one independent or predictor variables which is similar to multivariate analysis.

We use this model because this model is very easy to understand and explain. The model's formula can be calculated by hand so that we can explain in-depth the model's process to the treasury department and show which parameters will be most affected by the land price value which is called “coefficient ”.

## k-Nearest Neighbor (kNN)

The traditional kNN algorithm is one of the oldest and simplest methods for pattern classification. The kNN rule classifies each unlabeled example by the majority label among its k-nearest neighbors in the training set. Its performance thus depends crucially on the distance metric used to identify nearest neighbors. In the absence of prior knowledge, most kNN classifiers use simple Euclidean metrics to measure the dissimilarities between examples represented as vector inputs.

The treasury department wants the model that is easy to understand and more reasonable to predict land price. Based on kNN theory, it will predict by exploring the neighborhood of that lot from x,y position. This theory fits with our dataset because land value will related with the land nearby in the concept same environment, same price.

## Recurrent Neural Network (RNN)

A recurrent neural network (RNN) is a type of artificial neural network which uses sequential data or time-series data. These deep learning algorithms are commonly used for ordinal or temporal problems. RNNs are called recurrent because they perform the same task for every element of a sequence, with the output being dependent on the previous computations. Another way to think about RNNs is that they have a “memory” that captures information about what has been calculated so far. In theory, RNNs can make use of information in arbitrarily long sequences, but in practice, they are limited to looking back only a few steps.

We choose this model because this model is more effective than other well-known machine learning models about performance. The Neural Network approach can be expected that it will get better performance than the others because of the complexity of the model.

## Random Forest

Random forests is a supervised learning algorithm. It can be used both for classification and regression. It is also the most flexible and easy to use algorithm. A forest consists of many trees. It is said that the more trees it has, the more robust a forest is. Random forests create decision trees on randomly selected data samples, get prediction from each tree and select the best solution by means of voting. It also provides a pretty good indicator of the feature importance.

We use this model to predict land prices because the Random Forest approach is more accurate and stable. The model will do every single way by random the features create a decision tree and predict. Each tree will give a good or bad performance but Random Forest will combine the result and make overall performance be better.
