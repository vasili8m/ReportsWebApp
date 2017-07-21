import Translator from 'bazinga-translator';

const en_translations = {
    'step_1.title': 'What product type do you use?',
    'step_2.title': 'What type of problem have you encountered?',
    'step_2.contact_support': 'If the problem does not fall under any category that is listed here, please contact our tech support:',
    'step_2.support_email': 'support@adguard.com',
    'step_2.when_the_problem_is_resolved': 'Great! Thank you for using Adguard!',
    'step_2.win.mark_stealth_options_below': 'Please mark any of these options if you have them enabled in Stealth Mode',
    'step_2.android.select_filtering_mode': 'Do you use VPN or HTTP proxy mode?',
    'step_2.android.select_filtering_method': 'What filtering method do you use?',
    'step_2.ios.is_syswide_filt_enabled': 'Do you use System-wide filtering?',
    'step_2.ios.is_simplified_filt_enabled': 'Do you use Simplified filters mode?',
    'step_2.ios.is_DNS_enabled': 'Do you use Adguard DNS?',
    'step_3.title': 'Where did you encounter the problem?',
    'step_3.contact_support': 'If the problem does not fall under any category that is listed here, please contact our tech support:',
    'step_3.contact_support': 'support@adguard.com',
    'step_3.web.web_url_placeholder': 'Browser',
    'step_3.web.browser_name_placeholder': "Enter the browser name...",
    'step_3.web.above_url_input': 'Please enter the full URL of the web page you had encountered the problem on:',
    'step_3.web.url_input_placeholder': "Enter page URL here...",
    'step_3.app.how_to_get_url': "Please enter the full link to the Google Play app you had encountered the problem in. To do so, open the app in Google Play, scroll down, tap on 'Share' button and choose 'Copy to clipboard'. Then paste to the text field below.",
    'step_3.app.url_placeholder': "Enter Google Play app URL here...",
    'step_3.web.datacomp_enabled': 'Is the data compression in your browser enabled?',
    'step_4.title': 'What filters do you have enabled?',
    'step_4.filter_input_placeholder': "Start typing filters name here...",
    'step_5.title': 'Submit a screenshot',
    'step_5.please_take_a_screenshot': 'Please take a screenshot (or screenshots, if needed) of the problem and upload it to any cloud service.',
    'step_5.how_do_i_do_it': 'If you are unsure of how to do it, read our %ManualLink%.',
    'step_5.manual': 'manual',
    'step_5.screenshot_requirements': 'When taking the screenshot(s), please keep in mind following requirements:',
    'step_5.please_highlight_screenshot': 'If it is unclear from the screenshot what the problem is, highlight it with an arrow/frame/etc;',
    'step_5.full_br_should_be_visible': 'The full browser window should be visible;',
    'step_5.take_a_long_screenshot': 'Please take a "long" screenshot (%InstructionLink%)',
    'step_5.what_is_a_long_screenshot': 'what is "long" screenshot?',
    'step_5.screenshot_inputbox_placeholder': "Enter screenshot URL...",
    'step_5.screenshot_addbtn': "Add",
    'step_6.title': 'Add your comment',
    'step_6.this_step_is_optional': 'This step is optional. Type in the text box below any information that you think is necessary for the developers to know.',
    'step_6.comment_textbox_placeholder': "Enter any additional information here",
    'step_7.title': 'Check the information',
    'step_7.prod': 'Adguard Product:',
    'step_7.ver': 'version',
    'step_7.br': 'Browser:',
    'step_7.datacompenabled': 'with data compression enabled',
    'step_7.prob_url': 'Problem URL:',
    'step_7.prob_app_url': 'Problem App:',
    'step_7.prob_type': 'Problem Type:',
    'step_7.filters': 'Filters:',
    'step_7.screenshots': 'Screenshots:',
    'step_7.comments': 'Comments:',
    'step_7.your_report_is_being_submitted': 'Your report is being submitted',
    'step_7.please_wait': 'Please wait...',
    'step_8.title.success': 'Your report has been submitted!',
    'step_8.sub1.success': 'Thank you for reporting the issue.',
    'step_8.sub2.success': 'You can keep track of the progress of your report in the below link:',
    'step_8.title.fail': "Your report couldn't be submitted",
    'step_8.sub1.fail': "This could be a temporary network connectivity problem.",
    'step_8.sub2.fail': "Please try again later.",
    'global.nav.prev': 'Prev',
    'global.nav.next': 'Next',
    'global.nav.submit': 'Submit',
    'global.progress_bar.step': 'Step'
};

const json = {
    "locale": "en",
    "defaultDomain": "domain",
    "translations": {
        "en": {
            "domain": en_translations
        }
    }
};

export default Translator.fromJSON(json);
