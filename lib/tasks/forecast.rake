namespace :forecast do
  desc "Deletes image files that were created 30+ minutes ago"
  task delete_expired: :environment do
    Dir["#{Rails.root}/public/zipcodes/*.png"].each do |i|
      if (Time.now - 30.minutes) >= File::ctime(i)
        `rm "#{i}"`
      end
    end
  end
end
