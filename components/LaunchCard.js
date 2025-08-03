export default function LaunchCard({ launch }) {
  return (
    <div className="card">
      <img src={launch.links.mission_patch_small} alt={launch.mission_name} width="100" />
      <h4>{launch.mission_name} #{launch.flight_number}</h4>
      <p><b>Mission Ids:</b></p>
      <ul>
        {launch.mission_id && launch.mission_id.length > 0 ? (
          launch.mission_id.map((id) => <li key={id}>{id}</li>)
        ) : (
          <li>None</li>
        )}
      </ul>
      <p><b>Launch Year:</b> {launch.launch_year}</p>
      <p><b>Successful Launch:</b> {launch.launch_success?.toString()}</p>
      <p><b>Successful Landing:</b> {
        launch.rocket.first_stage.cores[0].land_success?.toString() || 'null'
      }</p>
    </div>
  );
}
