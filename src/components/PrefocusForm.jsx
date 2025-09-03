import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { frPropOptions, frDurationOptions, frThemeOptions } from '../pages/Prefocus';

export default function PrefocusForm({
    frProp, setFrProp,
    frDuration, setFrDuration,
    frSound, setFrSound,
    frTheme, setFrTheme,
    onSubmit
}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl
                fullWidth
                margin="normal"
                className="form"
            >
                <InputLabel id="frPropLabel">Focus/Rest proportion</InputLabel>
                <Select
                    labelId="frPropLabel"
                    value={frProp}
                    label="Focus/Rest proportion"
                    onChange={e => setFrProp(e.target.value)}
                >
                    {frPropOptions.map(option => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl
                fullWidth
                margin="normal"
                className='form'
            >
                <InputLabel id="frDurationLabel">Duration</InputLabel>
                <Select
                    labelId="frDurationLabel"
                    value={frDuration}
                    label="Duration"
                    onChange={e => setFrDuration(e.target.value)}
                >
                    {frDurationOptions.map(option => (
                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl
                fullWidth
                margin="normal"
                className='form'
            >
                <InputLabel id="frSoundLabel">Notification sound</InputLabel>
                <Select
                    labelId="frSoundLabel"
                    value={frSound ? "active" : "inactive"}
                    label="Notification sound"
                    onChange={e => setFrSound(e.target.value === "active")}
                >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">Inactive</MenuItem>
                </Select>
            </FormControl>

            <FormControl
                fullWidth
                margin="normal"
                className='form'
            >
                <InputLabel id="frThemeLabel">Theme</InputLabel>
                <Select
                    labelId="frThemeLabel"
                    value={frTheme}
                    label="Theme"
                    onChange={e => setFrTheme(e.target.value)}
                >
                    {frThemeOptions.map(option => (
                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <button>Start</button>
            {/* <Button type="submit" variant="contained" color="primary" fullWidth>
                Start
            </Button> */}
        </form>
    );
}
