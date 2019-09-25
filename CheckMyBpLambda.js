{\rtf1\ansi\ansicpg1252\cocoartf1671\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 /* eslint-disable  func-names */\
/* eslint-disable  no-console */\
\
const Alexa = require('ask-sdk');\
\
const \{\
  getRequestType,\
  getIntentName\
\} = require('ask-sdk-core');\
 \
const LaunchRequestHandler = \{\
  canHandle(handlerInput) \{\
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';\
  \},\
  handle(handlerInput) \{\
    const speakOutput = 'Welcome to A and D CONNECT. What shall I do? If you do not know what to do, please say help.';\
    return handlerInput.responseBuilder\
      .speak(speakOutput)\
      .reprompt('What shall I do?')\
      .getResponse();\
  \},\
\};\
\
const GetBPHandler = \{\
  canHandle(handlerInput) \{\
    return (getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'\
        && getIntentName(handlerInput.requestEnvelope) === 'BPIntent');\
  \},\
  handle(handlerInput) \{\
    const speechOutput = "Your last blood pressure is SYS 120 DIA 80 Pulse 60. Is there anything else I should do?";\
    return handlerInput.responseBuilder\
      .speak(speechOutput)\
      .reprompt('Is there anything else I should do?')\
      .getResponse();\
  \},\
\};\
\
const HelloWorldHandler = \{\
  canHandle(handlerInput) \{\
    return (handlerInput.requestEnvelope.request.type === 'IntentRequest'\
        && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent');\
  \},\
  handle(handlerInput) \{\
    const speechOutput = "Hello World, do you want to know your blood pressure today? Or do you want to know some facts about blood pressure?";\
    return handlerInput.responseBuilder\
      .speak(speechOutput)\
      .reprompt('How can I help you?')\
      .getResponse();\
  \},\
\};\
\
const HospitalHandler = \{\
  canHandle(handlerInput) \{\
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'\
        && handlerInput.requestEnvelope.request.intent.name === 'HospitalIntent';\
  \},\
  handle(handlerInput) \{\
    const speechOutput = "Sorry, I can't answer the question. Because, I'm not doctor.";\
    return handlerInput.responseBuilder\
      .speak(speechOutput)\
      .reprompt('Is there anything else I should do?')\
      .getResponse();\
  \},\
\};\
\
const HelpHandler = \{\
  canHandle(handlerInput) \{\
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'\
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';\
  \},\
  handle(handlerInput) \{\
    const HELP_MESSAGE = 'I will teach you your blood pressure value. For example, Please ask me How many blood pressure?';\
    const HELP_REPROMPT = 'What shall I do?';\
    return handlerInput.responseBuilder\
      .speak(HELP_MESSAGE)\
      .reprompt(HELP_REPROMPT)\
      .getResponse();\
  \},\
\};\
\
const ExitHandler = \{\
  canHandle(handlerInput) \{\
    const request = handlerInput.requestEnvelope.request;\
    return request.type === 'IntentRequest'\
      && (request.intent.name === 'AMAZON.CancelIntent'\
        || request.intent.name === 'AMAZON.StopIntent');\
  \},\
  handle(handlerInput) \{\
    const STOP_MESSAGE = 'Thank you for using me. Goodbye!';\
    return handlerInput.responseBuilder\
      .speak(STOP_MESSAGE)\
      .getResponse();\
  \},\
\};\
\
const SessionEndedRequestHandler = \{\
  canHandle(handlerInput) \{\
    //const request = handlerInput.requestEnvelope.request;\
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';\
  \},\
  handle(handlerInput) \{\
    console.log(`Session ended with reason: $\{handlerInput.requestEnvelope.request.reason\}`);\
\
    return handlerInput.responseBuilder.getResponse();\
  \},\
\};\
\
const ErrorHandler = \{\
  canHandle() \{\
    return true;\
  \},\
  handle(handlerInput, error) \{\
    console.log(`Error handled: $\{error.message\}`);\
\
    return handlerInput.responseBuilder\
      .speak('I beg your pardon? Please ask me again.') //Sorry, an error occurred.\
       .reprompt('Is there anything else?')\
      .getResponse();\
  \},\
\};\
\
const skillBuilder = Alexa.SkillBuilders.standard();\
\
exports.handler = skillBuilder\
  .withSkillId('amzn1.ask.skill.bb212b34-c548-49b4-bcfe-d1f007240009')\
  .addRequestHandlers(\
    LaunchRequestHandler,\
    GetBPHandler,\
    HelloWorldHandler,\
    HospitalHandler,\
    SessionEndedRequestHandler,\
    HelpHandler,\
    ExitHandler\
  )\
  .addErrorHandlers(ErrorHandler)\
  .lambda();}