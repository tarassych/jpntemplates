<?php

if ( isset($_POST['atlas_email']) && $_POST['atlas_email'] !== '' )
{
  $email = (isset($_POST['atlas_email'])) ? filter_var($_POST['atlas_email'], FILTER_SANITIZE_STRING) : '';
  $last_name = (isset($_POST['atlas_last_name'])) ? filter_var($_POST['atlas_last_name'], FILTER_SANITIZE_STRING) : '';
  $first_name = (isset($_POST['atlas_first_name'])) ? filter_var($_POST['atlas_first_name'], FILTER_SANITIZE_STRING) : '';
  $phone_number = (isset($_POST['atlas_phone_number'])) ? filter_var($_POST['atlas_phone_number'], FILTER_SANITIZE_STRING) : '';

  $travel_agent = (isset($_POST['atlas_travel_agent'])) ? filter_var($_POST['atlas_travel_agent'], FILTER_SANITIZE_STRING) : 'No';
  $travel_advisor = (isset($_POST['atlas_travel_advisor'])) ? filter_var($_POST['atlas_travel_advisor'], FILTER_SANITIZE_STRING) : 'No';
  $news_media = (isset($_POST['atlas_news_media'])) ? filter_var($_POST['atlas_news_media'], FILTER_SANITIZE_STRING) : 'No';

  $travel_advisor_company = (isset($_POST['atlas_travel_advisor_company'])) ? filter_var($_POST['atlas_travel_advisor_company'], FILTER_SANITIZE_STRING) : '';
  $news_media_company = (isset($_POST['atlas_news_media_company'])) ? filter_var($_POST['atlas_news_media_company'], FILTER_SANITIZE_STRING) : '';


  $heading_row = ['Email', 'First Name', 'Last Name', 'Phone Number', 'Has Travel Agent', 'Is a Travel Advisor', 'Travel Advisor Company', 'Is a Media/Influencer', 'Media/Influencer Company' ];

  $form_data_row = [
    $email,
    $first_name,
    $last_name,
    $phone_number,
    $travel_agent,
    $travel_advisor,
    $travel_advisor_company,
    $news_media,
    $news_media_company
  ];

  // save CSV
  try {
    $csv_file = 'csv/formdata.csv';
    $fp = fopen($csv_file, 'a');

    fputcsv($fp, $form_data_row );

    fclose($fp);

    echo "csv stored";
  } catch (Exception $e) {
      echo 'File write error: ',  $e->getMessage(), "\n";
  }


  // send email to
  try {
    // $email_to = 'taras.sych@gmail.com';
    $email_to = 'mariefdz@gmail.com'; 
    $email_from = 'Atlas Ocean Voyagers <info@atlasoceanvoyages.com>';
    $email_subj = 'New World Navigator sail request submitted';

    $email_headers = array(
      'From' => 'Atlas Ocean Voyagers <noreply@atlasoceanvoyages.com>',
      'Reply-To' => 'Atlas Ocean Voyagers <noreply@atlasoceanvoyages.com>'
    );

    $email_body = "You got new request for World Navigator Sail!\n
\n
$first_name $last_name\n
Email: $email\n
Phone Number: $phone_number\n
\n
Working with a travel agent: $travel_agent\n
\n
Is a Travel Advisor: $travel_agent\n";

    if ( $travel_agent !== 'No') {
      $email_body .= "Travel Advisor Company: $travel_advisor_company\n";
    }

    $email_body .= "\n
    Is a News Media / Influencer: $news_media\n";

    if ( $news_media !== 'No' ){
      $email_body .= "Media / Influencer Company: $news_media_company\n";
    }

    mail($email_to, $email_subj, $email_body, $email_headers);

    echo "mail sent";

  } catch (Exception $e) {
      echo 'Email send error: ',  $e->getMessage(), "\n";
  }
  echo "ok";
}




?>
