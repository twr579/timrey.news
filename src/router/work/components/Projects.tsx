import thermometer from "../../../images/thermometer.png"
import aqiSensor from "../../../images/aqi-sensor.png";
import plusOneRobotics from "../../../images/plus-one-robotics.png";
import mitDemZug from "../../../images/mit-dem-zug.png";
import exerciseIdentifier from "../../../images/exercise-identifier.png";
import feedbackFriend from "../../../images/feedback-friend.png";
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
        id: 'plusonerobotics',
        href: 'www.plusonerobotics.com/',
        title: 'Yonder + InductOne',
        date: '04/23 - 08/23',
        labels: [Labels.JavaScript, Labels.TypeScript, Labels.WebDevelopment, Labels.SQL, Labels.Docker, Labels.GCP],
        image: plusOneRobotics,
        brief: '',
        description: ``
    },
    {
        id: 'mitdemzug',
        href: 'github.com/twr579/mit-dem-zug',
        title: 'mit dem Zug',
        date: '01/23',
        labels: [Labels.JavaScript, Labels.WebDevelopment, Labels.Docker, Labels.GCP],
        image: mitDemZug,
        brief: '',
        description: ``
    },
    {
        id: 'exerciseidentifier',
        href: 'github.com/JordanMagbag/ExerciseIdentifier',
        title: 'Exercise Identifier',
        date: '12/22',
        labels: [Labels.Python, Labels.ComputerVision],
        image: exerciseIdentifier,
        brief: '',
        description: ``
    },
    {
        id: 'feedbackfriend',
        href: 'github.com/Feedback-Friend/Web-Application',
        title: 'Feedback Friend',
        date: '01/22 - 12/22',
        labels: [Labels.JavaScript, Labels.WebDevelopment, Labels.Python, Labels.SQL],
        image: feedbackFriend,
        brief: '',
        description: ``
    },
    {
        id: 'castlezombie',
        href: 'github.com/twr579/Castle-Zombie',
        title: 'Castle Zombie',
        date: '04/20 - 05/20',
        labels: [Labels.Cpp, Labels.Embedded],
        image: castleZombie,
        brief: '',
        description: ``
    },
];