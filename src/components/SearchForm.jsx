import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

const SearchForm = () => {
    return (
        <Card>
            <Grid alignItems="center" justifyContent="center">
                <h2>Enter a puppy name</h2>
                <form>
                    <TextField id="outlined-basic" label="Puppy Search" variant="outlined" placeholder="Search for a puppy" />
                    <Button variant="contained">Search</Button>
                </form>
                <br/>
            </Grid>
        </Card>
    )
}

export default SearchForm;
