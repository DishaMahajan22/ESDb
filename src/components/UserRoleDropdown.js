import { useUser } from "./UserRole";

const UserRoleDropdown = () => {
  const { userRole, updateUserRole } = useUser();

  const changeRole = (newRole) => {
    updateUserRole(newRole);
  };

  return (
    <div className="d-flex align-items-center">
      <label htmlFor="roleDropdown" className="p-2">Select Role: </label>
      <div className="dropdown">
        <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
        >
          {userRole}
        </button>
        <div className="dropdown-menu">
          <div
            className="dropdown-item"
            onClick={() => changeRole("General Fan")}
          >
            General Fan
          </div>
          <div
            className="dropdown-item"
            onClick={() => changeRole("Manager/Expert")}
          >
            E-sports Manager/Expert
          </div>
          <div
            className="dropdown-item"
            onClick={() => changeRole("Stat")}
          >
            Statistician
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRoleDropdown;
