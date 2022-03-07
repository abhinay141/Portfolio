export const projects = [
  {
    title: 'Human-activity-detection-deep-learning-',
    description: "It involves predicting the movement of a person based on sensor data and traditionally involves deep domain expertise and methods from signal processing to correctly engineer features from the raw data to fit a machine learning model. Initially Classical ML models and some extra featurization resulted in 96 percent accuracy, while our present model which has 32 LSTM units, a dropout rate of 0.5, and 2-LSTM layers resulted in 91 percent accuracy and a loss of 0.30.",
      image: '/images/human.webp',
      tags: ['LSTM', 'python'],
    source: 'https://github.com/abhinay141/Human-activity-detection-deep-learning-',
    visit: 'https://github.com/abhinay141/Human-activity-detection-deep-learning-',

    id: 0,
  },
  {
    title: 'Amazon Apparel Recommendations',
    description:"Recommends fashion products based on the features extracted from images and text, using both distance-based algorithms and collaborative filtering techniques.",
    image: '/images/apparel.jpg',
    tags: ['Tensorflow', 'cosine-distance'],
    source: 'https://github.com/abhinay141/Amazon-apparel-recommendations/blob/main/AppliedAIWorkshop.ipynb',
    visit: 'https://github.com/abhinay141/Amazon-apparel-recommendations/blob/main/AppliedAIWorkshop.ipynb',
    id: 1,
  },
  {
    title: 'Personalized-cancer-diagnosis',
    description: "Classify the given genetic variations/mutations based on evidence from text-based clinical literature, in this project, there were three features which included the gene, variation, and text feature, featurizations were performed for each of those features, and they were fed to a model which in the end produced a log-loss of 1.16.",
      image: '/images/cancer.jpg',
      tags: ['SGD', 'calibrated classifier'],
    source: 'https://github.com/abhinay141/Personalized-cancer-diagnosis/blob/master/cancer%20resubmission.ipynb',
    visit: 'https://github.com/abhinay141/Personalized-cancer-diagnosis/blob/master/cancer%20resubmission.ipynb',
    id: 2,
  },
  {
    title: 'Quora Insincere Question Classification',
    description: "In this project, we will develop models that identify and flag insincere questions. To date, Quora has employed both machine learning and manual review to address this problem. Given a semantic glove text vector along with some hand-engineered features, the model will predict, whether a question is sincere or not. The model managed a log-loss score of 0.17, which is phenomenal. the code is written with proper documentation.",
    image: '/images/quora.jpg',
    tags: ['xg-boost', 'Logit-regression', 'log-loss'],
    source: 'https://github.com/abhinay141/quora-insincere-question-prediction/blob/master/quora.ipynb',
    visit: 'https://github.com/abhinay141/quora-insincere-question-prediction/blob/master/quora.ipynb',
    id: 3,
  },


];

export const TimeLineData = [
  { year: 2017, text: 'Started my journey', },
  { year: 2018, text: 'Participated in various coding and ML Bootcamps', },
  { year: 2019, text: 'Landed my first ML internship and a full-time job', },
  { year: 2020, text: 'learned various web-dev technologies', },
  { year: 2021, text: 'Learned DS and ALGO to improve my problem solving.', },
];
