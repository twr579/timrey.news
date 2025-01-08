import thermometer from "../../../images/thermometer.png"
import aqiSensor from "../../../images/aqi-sensor.png";
import mitDemZug from "../../../images/mit-dem-zug.png";
import exerciseIdentifier from "../../../images/exercise-identifier.png";
import castleZombie from "../../../images/castle-zombie.png";
import { Labels } from "./Filter";

export const projects = [
    {
        id: 'thermometer',
        href: 'github.com/twr579/ATmega328P-Thermometer',
        title: 'Thermometer',
        date: '08/24 - 09/24',
        labels: [Labels.Cpp, Labels.Embedded],
        image: thermometer,
        brief: 'A portable, lightweight thermometer based on the ATmega328P microcontroller.',
        description: `I was inspired to work on this project because of my lack of a thermometer to take on hiking/camping trips.
                    I've previously relied on my phone's weather app and woken up with a frost-covered sleeping bag as a result,
                    so having a thermometer on hand is a useful tool for testing the efficacy of my sleep system. The code was
                    written and tested in Arduino IDE. Schematic and PCB were designed in KiCad.`
    },
    {
        id: 'monitor',
        href: 'github.com/twr579/AQI-Sensor',
        title: 'Air Quality Monitor',
        date: '12/23 - 02/24',
        labels: [Labels.Cpp, Labels.Embedded, Labels.AWS],
        image: aqiSensor,
        brief: 'A portable sensor designed to measure and store Air Quality Index (AQI) readings while on the go.',
        description: `This project was developed in the PlatformIO IDE for VS Code on an ESP32 microcontroller (Adafruit HUZZAH32).
                    I often go on walks and am curious about the quality of the air I breathe, especially at busy intersections, so I
                    had the idea to develop an embedded system that records a history of AQI readings as I move. The microcontroller
                    takes simultaneous readings from a BME680 sensor - which can obtain readings for VOC level, CO2 level, temperature,
                    pressure, and humidity, as well as calculate an AQI estimate - and a GPS module, before sending that data to an AWS
                    DynamoDB table as an MQTT message via AWS IoT Core and a PubSub topic.`
    },
    {
        id: 'mitdemzug',
        href: 'github.com/twr579/mit-dem-zug',
        title: 'mit dem Zug',
        date: '01/23',
        labels: [Labels.JavaScript, Labels.WebDevelopment, Labels.Docker, Labels.GCP],
        image: mitDemZug,
        brief: 'A web app for finding German train stations within reach of your current location',
        description: `I created this website as part of the interview process for my internship at Plus One Robotics. I was inspired by
        my discovery of a German railway API on a list of public APIs that appealed to my common interest in Germany and public transit.
        The name "mit dem Zug" means "by train" in German. The app is intended to assist spontaneous Germans on the go, as it returns a list
        of train stations reachable from the user's starting station within a given time limit. This is accomplished by an algorithm that recursively
        looks through train schedules to determine which arrival times occur within the user's time frame. A sophisticated UI displays the name and picture
        of each station, as well as the route details including arrival times, departure times, and transfers.`
    },
    {
        id: 'exerciseidentifier',
        href: 'github.com/JordanMagbag/ExerciseIdentifier',
        title: 'Exercise Identifier',
        date: '12/22',
        labels: [Labels.Python, Labels.ComputerVision],
        image: exerciseIdentifier,
        brief: 'A computer vision model for identifying body-weight exercises',
        description: `For my computer vision course, I worked with a team to develop the backend of a web application for identifying the exercise
        in an uploaded image. My duties included gathering training and testing data sets, running the data through a pose embedder and classifier (BlazePose),
        and writing code to output a confusion matrix with cv2 and numpy and send a list of likely poses to the frontend via Flask. Based on the confusion matrix,
        the application can identify the six exercises tested with an average accuracy of 85%. A unique aspect of the project is the fact that I chose to use a
        dataset consisting of computer generated exercise images rather than real human examples. The results conclusively prove the efficacy of this practice
        and the potential of using stand-ins for genuine human models to more easily gather a vast amount of pose data.`
    },
    {
        id: 'castlezombie',
        href: 'github.com/twr579/Castle-Zombie',
        title: 'Castle Zombie',
        date: '04/20 - 05/20',
        labels: [Labels.Cpp, Labels.Embedded],
        image: castleZombie,
        brief: 'A first-person shooter video game programmed on a LaunchPad TM4C123 microcontroller',
        description: `Castle Zombie was developed as the final project for my Intro to Embedded Systems class. It consists
        of a move phase in which the player gains points by holding down one of the input buttons to move through a hallway and
        a zombie phase in which the player aims and fires at zombies before they advance and attack. It uses two pushbuttons and a slide
        potentiometer for player input, an LCD display for graphical output, which includes sprites of varying sizes, and a stereo jack in
        conjunction with a digital-to-analog converter (DAC) for audio output. The program includes multiple interrupt service routines (ISRs)
        to update inputs and outputs. Check my GitHub for a detailed technical description of the project that I produced for my Engineering
        Communications course.`
    },
];