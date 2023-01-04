import FileInput from "../Parts/FileInput";
import ColorPicker from "../Parts/ColorPicker";
import TextBox from "../Parts/TextBox";
import SubmitButton from "../Parts/SubmitButton";
import {Container,Grid} from "@mui/material";
const GraphForm = () => {
    const pushSubmitButton = (event) => {
        event.preventDefault();
    }    
    return (        
        <>
            <form onSubmit={pushSubmitButton}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>                        
                        <FileInput label="x軸:" val={"xs"}/><p></p>
                    </Grid>
                    <Grid item xs={12}>
                        <FileInput label="y軸:" val={"ys"}/><p></p>
                    </Grid>
                    <Grid item xs={12} >
                        <TextBox label="凡例:" val={"legend"}/>
                    </Grid>
                    <Grid item xs={12}>
                        <ColorPicker label="色を選択 " val={"color"}/>
                    </Grid>
                    <Grid item xs={12}>
                        <SubmitButton label="グラフを作成"/>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default GraphForm;
