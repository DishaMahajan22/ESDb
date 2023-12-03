import {useUser} from './UserRole';
import GeneralFanForm from './GeneralFanForm';
import ManagerExpertForm from './ManagerExpertForm';
import StatisticianForm from './StatisticianForm';

const Insert = () => {
  const { userRole } = useUser();
    return (
      <>
        <h1 className='mx-5 my-5'>Insert Into ESDb</h1>
      {userRole === 'General Fan' && <GeneralFanForm />}
      {userRole === 'Manager/Expert' && <ManagerExpertForm />}
      {userRole === 'Stat' && <StatisticianForm />}
      </>
    );
  };
  
  export default Insert;
  