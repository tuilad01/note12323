$response = Invoke-WebRequest -Uri https://timeapi.io/api/Time/current/zone?timeZone=ASIA/ho_chi_minh -ContentType application/json 

# Check if the request was successful (status code 200)
if ($response.StatusCode -eq 200) {
    # Parse the JSON content of the response
    $jsonContent = $response.Content | ConvertFrom-Json

    # Access specific fields or properties in the JSON content
    $year = $jsonContent.year  # Replace fieldName with the actual field name you want to access
    $month = $jsonContent.month
    $day = $jsonContent.day
    $hour = $jsonContent.hour
    $minute = $jsonContent.minute
    $seconds = $jsonContent.seconds

    $strDateTime = "{0}-{1}-{2} {3}:{4}:{5}" -f $year, $month, $day, $hour, $minute, $seconds
   
    
    

    # Output the value of the desired field
    $message = "This string date time {0} will be set for this computer." -f $strDateTime
    Write-Output $message

    $dateTime = Get-Date $strDateTime
    Set-Date $dateTime
}
else {
    Write-Host "Error: Failed to retrieve data from the server. Status code: $($response.StatusCode)"
}