import { Chip, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export enum Labels {
    Cpp = 'C++',
    Embedded = 'Embedded',
    AWS = 'AWS',
    JavaScript = 'JavaScript',
    TypeScript = 'TypeScript',
    WebDevelopment = "Web Development",
    Docker = 'Docker',
    GCP = 'GCP',
    SQL = 'SQL',
    Python = 'Python',
    ComputerVision = 'Computer Vision',
}

interface FilterProps {
    filterLabels: Array<keyof typeof Labels>;
    setFilterLabels: React.Dispatch<React.SetStateAction<Array<keyof typeof Labels>>>;
}

function Filter({ filterLabels, setFilterLabels }: FilterProps) {
    const areAllSelected = filterLabels.length === (Object.values(Labels) as Array<keyof typeof Labels>).length;

    const handleSelectAll = () => {
        if (areAllSelected) {
            setFilterLabels([]);
        } else {
            setFilterLabels(Object.values(Labels) as Array<keyof typeof Labels>);
        }
    }

    const handleClick = (label: keyof typeof Labels) => {
        const selected = filterLabels.includes(label);

        let newFilterLabels;
        if (selected) {
            newFilterLabels = filterLabels.filter((el) => { return el !== label });
            setFilterLabels(newFilterLabels);
        } else {
            newFilterLabels = [...filterLabels];
            newFilterLabels.push(label);
        }
        setFilterLabels(newFilterLabels);
    };

    return (
        <Typography variant='h4'> Filter:
            <Chip
                label="Select All"
                sx={{ mx: 1, mb: 1 }}
                variant={areAllSelected ? "outlined" : "filled"}
                icon={areAllSelected ? <CheckCircleOutlineIcon /> : <RadioButtonUncheckedIcon />}
                onClick={() => handleSelectAll()}
            />
            {
                (Object.values(Labels) as Array<keyof typeof Labels>).map(
                    (label, index) => <Chip
                        label={label}
                        sx={{ mr: 1, mb: 1 }}
                        variant={filterLabels.includes(label) ? "outlined" : "filled"}
                        icon={filterLabels.includes(label) ? <CheckCircleOutlineIcon /> : <RadioButtonUncheckedIcon />}
                        onClick={() => handleClick(label)}
                        key={index}
                    />
                )

            }
        </Typography>);
}

export default Filter;