import './Form.scss';

export const Form = () => {
  return `
        <form class="form">
            <h2>i want get fresh update</h2>
            <label for="firstName">First name:</label>
            <input type="text" name="firstName" id="firstName">
            <label for="Email">Email:</label>
            <input type="text" name="Email" id="Email">
            <div class="chb">
                <input type="checkbox" name="subs" id="subs">
                <label for="subs" id="subs">I concent to the processing of personal data</label>
            </div>
        </form>
    `.trim();
};
