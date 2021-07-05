


const TextEditor = (props) => {
    if (props.type === "multilineTextEditor") {
      return null;
    }
    return <AppointmentForm.TextEditor {...props} />;
  };
  
  const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
    const optionsPic = [
      {
        id: "60cff2ed74c34ea254311e8a",
        text: "Triều Lê",
      },
      {
        id: "60cff742dbec139b90add99f",
        text: "Đăng Jinner",
      },
    ];
    const onCustomFieldChange = (nextValue) => {
        onFieldChange({ pic: nextValue });
      };
    
      return (
        <AppointmentForm.BasicLayout
          appointmentData={appointmentData}
          onFieldChange={onFieldChange}
          {...restProps}
          readOnly={appointmentData.status === 2 ? true : false}
        >
          <AppointmentForm.Label text="Người xét duyệt" type="title" />
          <AppointmentForm.Select
            type="filledSelect"
            value={appointmentData.pic}
            onValueChange={onCustomFieldChange}
            availableOptions={optionsPic}
            readOnly={appointmentData.status === 2 ? true : false}
          />
        </AppointmentForm.BasicLayout>
      );
    };

    const onCustomResource = withStyles()(
        ({ onResourceChange, appointmentResources, resource, ...restProps }) => {
          return (
            <AppointmentForm.ResourceEditor
              readOnly={true}
              appointmentResources={appointmentResources}
              resource={resource}
              {...restProps}
            ></AppointmentForm.ResourceEditor>
          );
        }
      );

       {/* <AppointmentForm
            onVisibilityChange={
              setVisibleAppoinment ? this.onHandleVisible : null
            }
            visible={setVisibleAppoinment}
            messages={{
              detailsLabel: "Xin nghỉ phép",
              allDayLabel: "Cả ngày",
              titleLabel: "Lý do xin nghỉ",
              commitCommand: "Gửi",
              moreInformationLabel: "Ghi chú thêm",
              repeatLabel: "Lặp lại",
              repeatEveryLabel: "Số ngày",
              daysLabel: "ngày",
              daily: "Mỗi ngày",
              weekly: "Tuần",
              monthly: "Tháng",
              yearly: "Năm",
              endRepeatLabel: "Hạn hết thúc",
              moreInformationLabel: "",
            }}
            appointmentData={{
              pic: "60cff2ed74c34ea254311e8a",
            }}
            basicLayoutComponent={BasicLayout}
            textEditorComponent={TextEditor}
            resourceEditorComponent={onCustomResource}
          /> */}