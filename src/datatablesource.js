export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Profile Image & User",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "phone",
    headerName: "Phone Number",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 150,
  },
  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  
];