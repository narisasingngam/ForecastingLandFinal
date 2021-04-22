---
title: Project Development
---

## Discovering Dataset

![image](/img/landuse.png)

94% of the zone area are residence zones. The rest are commercial, government, and industry zones. Some areas need to be cut out due to that area can’t be sold; for example, government zones.


## Data Preparation and Data Cleansing

![blockblue](/img/blockblue.png)

On the left side of Figure above, some dataset contains the land that has not been sold for a long time like Kasetsart University, Chatuchak park, Klong Prem Central Prison so the expert decided to cut this area off which will not be used to predict in the model.


## Important points of interest

The POI given dataset contains many points that are not big enough to be points of interest and affect land price such as 7-11, ATM, and etc. The points that we selected to be point of interest are three main points, which are shopping mall, hospital and skytrain station (BTS, MRT)


## Feature selection

We want to know the factors that related to the land price value. So, we need to do the experiment to find the factors to predict the land price value.

![fitImage](/img/featureTable.png)

As shown in the table, We choose the features based on the correlation value. The accuracy of predicting land value is best when we choose street name, zone, street width, land use, and POI in three of four models. This result helps us to confirm that these features are useful in terms of meaning of the parameters that we discuss with the expert and also to reach the best accuracy.


## Plot trend of land price on street

![fitImage](/img/streetMap.png)

We plot the land price on the road to see the direction of the land price and we can see the trend of the land price that is raised by the street. The land closer to the street will cause the higher price.


## Reference land principle 

![fitImage](/img/reflotMap.png)

We have to select the parameters related to the road of reference land so that it directly affects the land price. Therefore, we select the land on each road based on the street code. We also select the reference land near the main road to increase the relationship between the reference land and the road. Finally, we picked reference land by the second way and we got 1,268 lots.


After we find the reference land, we prove that our principles are correct by selecting other reference land lots with other conditions and then comparing the land prices accuracy after training with the kNN model using the same features.


First condition, we pick a random land from a parcel 1,268 lots (same row as our selected reference land) which gets the mean absolute percentage error value as **38.43%**. 


Second condition, we select land lots in each street code randomly with 1,268 lots (also the same row as our selected reference land) which gets the mean absolute which gets the mean absolute percentage error value as **17.681%**.


Compare with our principle reference land which we select land lots in each street code and the land that is closest to the main street which gets the mean absolute percentage error value as **17.270%**.


As a result, we can conclude that our principles have the least percentage error and it has the most correlation with the land price. That means our principle is useful for forecasting land prices in the future for the treasury department.


## Train and test selection

We design two different cases of train and test data to predict our model. 

- **Train parcel to predict land value.** 
        We split the parcel data 70% for training and 30% from testing which is the base practise for training data. This design does not work for us because training on their own dataset can not be used in real life. 

- **Train reference land to predict land value.**
        We train the reference land to prove that the land that we choose can represent a base price for other lands. To test the predicted performance of reference land, we use parcel to be a testing set to compare with a predicted result.

According to train and test selection, we summarize the most suitable for predicting the land price is training reference land and testing with the land value of parcel. 


## Model

We research a new solution for calculating land price by using a machine learning model instead of assigning a specialist. Machine learning combines computer science and statistical analysis to enhance the prediction. High-value predictions can be obtained within human-computer interaction. It helps to predict uncertain situations with the data.

In our project, we place importance on comparing the performance of four machine learning models to find the best accurate model for forecasting the land price.

The four models contains:

### Linear regression

Linear Regression is the most common predictive model to identify the relationship among the variables. Apart from univariate or multivariate data types, the concept is linear. Multiple or multivariable linear regression is the process of prediction with more than one independent or predictor variables which is similar to multivariate analysis.

We use this model because this model is very easy to understand and explain. The model's formula can be calculated by hand so that we can explain in-depth the model's process to the treasury department and show which parameters will be most affected by the land price value which is called “coefficient ”.

### k-Nearest Neighbor (kNN)

The traditional kNN algorithm is one of the oldest and simplest methods for pattern classification. The kNN rule classifies each unlabeled example by the majority label among its k-nearest neighbors in the training set. Its performance thus depends crucially on the distance metric used to identify nearest neighbors. In the absence of prior knowledge, most kNN classifiers use simple Euclidean metrics to measure the dissimilarities between examples represented as vector inputs.

The treasury department wants the model that is easy to understand and more reasonable to predict land price. Based on kNN theory, it will predict by exploring the neighborhood of that lot from x,y position. This theory fits with our dataset because land value will related with the land nearby in the concept same environment, same price.

### Recurrent Neural Network (RNN)

A recurrent neural network (RNN) is a type of artificial neural network which uses sequential data or time-series data. These deep learning algorithms are commonly used for ordinal or temporal problems. RNNs are called recurrent because they perform the same task for every element of a sequence, with the output being dependent on the previous computations. Another way to think about RNNs is that they have a “memory” that captures information about what has been calculated so far. In theory, RNNs can make use of information in arbitrarily long sequences, but in practice, they are limited to looking back only a few steps.

We choose this model because this model is more effective than other well-known machine learning models about performance. The Neural Network approach can be expected that it will get better performance than the others because of the complexity of the model.

### Random Forest

Random forests is a supervised learning algorithm. It can be used both for classification and regression. It is also the most flexible and easy to use algorithm. A forest consists of many trees. It is said that the more trees it has, the more robust a forest is. Random forests create decision trees on randomly selected data samples, get prediction from each tree and select the best solution by means of voting. It also provides a pretty good indicator of the feature importance.

We use this model to predict land prices because the Random Forest approach is more accurate and stable. The model will do every single way by random the features create a decision tree and predict. Each tree will give a good or bad performance but Random Forest will combine the result and make overall performance be better.

---

## Result

![fitImage](/img/result.png)

After we do a feature selection, the features that give the best performance are Street name, Zone, Street width, Land use and Point of interest. Owing to our project has a relation with the geometry value, the similar environment given the similar price. So, we add the Latitude and Longitude position (x, y) in our model to increase the accuracy. The result is represented as expected, the model that trains with X,Y point got the least error and the best model is Random Forest with the error 13.539%. However, as a requirement of the treasury department, they want a model that can be explainable. Therefore we will suggest the KNN model because it is the second best accuracy and easy to understand.

