import appContext from "../context/appContext";
import { useContext } from "react";
import Axios from "axios";
import { useEffect } from "react";

function Meetings() {
  const { meetings, setMeetings } = useContext(appContext);

  useEffect(() => {
    Axios.get("http://192.168.1.106:3001/meetings",{}).then((e) => {
      setMeetings(e.data);
    });
  }, []);

  return (
    <div>
    {
      meetings.map((e) => (
        <div key={e.id}>
          {`User: ${e.username}`}
          {`Spoke Languages: ${e.spokenLanguages}`}
          {`City: ${e.city}`}
          {`Free Time: ${e.freeTime}`}
        </div>
      ))
    }
    </div>
  );
}

export default Meetings;
