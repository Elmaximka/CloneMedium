package ru.javamentor.dao;


import ru.javamentor.model.Notification;

import java.util.List;

/**
 * Интерфейс для доступа к нотификациям из базы
 *
 * @version 1.0
 * @autor Java Mentor
 */
public interface NotificationDao {

    List<Notification> getAllNotes();

    Notification getOne(Long id);

    Notification getByTitle(String title);

    void updateNotification(Notification notification);

    void addNotification(Notification notification);

    void deleteNotification(Notification notification);
}
