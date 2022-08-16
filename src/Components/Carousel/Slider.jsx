import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "../../Styles/Font/TungstenCond-Book.otf";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: "NiceOne Deekline Party in Moscow",
        imgPath: "/1.jpg",
    },
    {
        label: "NiceOne Deekline Party in Moscow",
        imgPath: "/2.jpg",
    },
    {
        label: "NiceOne Deekline Party in Moscow",
        imgPath: "/3.jpg",
    },
    {
        label: "NiceOne Deekline Party in Moscow",
        imgPath: "/4.jpg",
    },
    {
        label: "NiceOne Deekline Party in Moscow",
        imgPath: "/5.jpg",
    },
    {
        label: "NiceOne Deekline Party in Moscow",
        imgPath: "/6.jpg",
    },
];

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: "100%", flexGrow: 1, bgcolor: "black"}}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    height: 30,
                    pl: 2,
                    bgcolor: "red",
                }}
            >
                <Typography sx={{fontFamily: "Tungsten", fontSize: 35}}>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    opacity: 0.9,
                                    display: "block",
                                    maxWidth: "100%",
                                    overflow: "hidden",
                                    width: "100%",
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                sx={{
                    height: 40,
                    bgcolor: "red",
                }}
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        variant="text"
                        color="inherit"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        variant="text"
                        color="inherit"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                    >
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}

export default SwipeableTextMobileStepper;
