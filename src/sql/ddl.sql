delimiter ;

create table if not exists `tualojs` (
    filepath varchar(255) not null,
    filename varchar(255) not null,
    primary key (filepath, filename),
    content longtext,
    mimetype varchar(255) not null default 'application/javascript',
    is_loader boolean not null default false,
    is_required boolean not null default false
);