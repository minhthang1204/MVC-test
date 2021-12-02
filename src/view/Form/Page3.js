import React, { Component } from "react";
import {
  Typography,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  Button
} from "@material-ui/core";
import {DropzoneDialog} from 'material-ui-dropzone'




export default class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false,
        files: []
    };
}

handleClose() {
    this.setState({
        open: false
    });
}

handleSave(files) {
    //Saving files to state for further use and closing Modal.
    this.setState({
        files: files,
        open: false
    });
}

handleOpen() {
    this.setState({
        open: true,
    });
}
  render() {
    return (
      <Typography component="h1" variant="h6" align="center">
        {" "}
        Nếu anh/chị đã và đang cách ly tại nhà
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="PhoneNumber"
            name="PhoneNumber "
            label="Thời gian bắt đầu cách ly"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Typography>Mức độ cách ly
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="F1"
          />
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="F2"
          />
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="F3"
          />
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="F4 trở lên"
          />
        </Typography>
        <Typography> Test Covid
        <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Đã Test"
          />
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Chưa test"
          />
        </Typography>
        <Typography> Kết quả các lần test
        <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Dương tính"
          />
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Âm tính"
          />
        </Typography>
        <Typography component="h2" variant="h6"> Kết quả khám bệnh
                <Button onClick={this.handleOpen.bind(this)}>
                  Add Image
                </Button>
                <DropzoneDialog
                    open={this.state.open}
                    onSave={this.handleSave.bind(this)}
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                    showPreviews={true}
                    maxFileSize={5000000}
                    onClose={this.handleClose.bind(this)}
                />
                </Typography>
      </Typography>
    );
  }
}
