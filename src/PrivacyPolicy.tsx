import "./PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-card">
        <h1 className="title">
          Privacy Policy for Salo Ala Mohamed{" "}
          <span className="arabic">(صلِّ على محمد ﷺ)</span>
        </h1>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Salo Ala Mohamed is a spiritual reminder app designed to display
            non-intrusive popups. This application does not collect, store,
            share, or transmit any personal data.
          </p>
        </section>

        <section>
          <h2>2. Data Collection and Usage</h2>
          <p>
            The application operates 100% offline. While the framework requests
            standard internet permissions, there are no backend servers, no
            external databases, and no user data ever leaves your device. All
            content and phrases are bundled locally within the app.
          </p>
        </section>

        <section>
          <h2>3. Device Permissions & Background Services</h2>
          <p>
            To function correctly and deliver timely reminders, the app requires
            specific system permissions and utilizes continuous background
            operations:
          </p>
          <ul>
            <li>
              <strong>System-Level Overlays (Display Over Other Apps):</strong>
              Required strictly to display the spiritual reminder popups over
              your screen when the device is unlocked or after 60 minutes of
              usage.
            </li>
            <li>
              <strong>Foreground Services & Notifications:</strong>
              Required by the Android OS to run our background listener. This
              keeps the app awake to detect screen unlocks and manage the
              internal timer. A standard notification is displayed to indicate
              this service is active.
            </li>
            <li>
              <strong>Battery Optimization Exemption:</strong>
              To ensure that reminders are delivered precisely and are not
              delayed or blocked by the system's power-saving modes, the app may
              request to be exempted from battery optimizations. This is used
              solely to maintain the reliability of the spiritual reminders.
            </li>
            <li>
              <strong>Persistent Background Execution & Auto-Restart:</strong>
              To ensure reminders are never missed, the app utilizes standard
              Android scheduling mechanisms (such as AlarmManager and
              WorkManager). This allows the service to run continuously, operate
              during Direct Boot (before the phone is unlocked after a restart),
              and automatically revive itself if the app is closed or swiped
              away. We do not monitor, track, or record your screen, apps, or
              usage habits during these background processes.
            </li>
            <li>
              <strong>Run at Startup:</strong>
              Allows the reminder service to automatically initiate when you
              reboot your device.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Local Data Storage</h2>
          <p>
            User preferences (such as chosen language, display speed, and
            reminder toggles) are saved entirely locally on your device. This
            data is never synced to a cloud or accessible by the developer.
          </p>
        </section>

        <section>
          <h2>5. Third-Party Services</h2>
          <p>
            This app does not use any third-party tracking, analytics, or
            advertising SDKs.
          </p>
        </section>

        <section>
          <h2>6. Children's Privacy</h2>
          <p>
            Because our app does not collect any personal information, it is
            completely safe for users of all ages, including children under 13.
          </p>
        </section>

        <section>
          <h2>7. Future Updates</h2>
          <p>
            If future updates introduce new features, this privacy policy will
            be updated accordingly. However, our core commitment to zero data
            tracking will remain unchanged.
          </p>
        </section>

        <section>
          <h2>8. Contact Information</h2>
          <p>
            If you have any questions regarding this privacy policy, please
            contact the developer at: <strong>dahabit@gmail.com</strong>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
